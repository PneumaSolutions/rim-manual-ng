import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCompletion } from 'ai/react'
import { Loader, User, Frown, CornerDownLeft, Search, Wand } from 'lucide-react'

export default function SearchPage() {
  const [query, setQuery] = React.useState<string>('')
  const [alertText, setAlertText] = React.useState<string>('')
  const { complete, completion, isLoading, error } = useCompletion({
    api: '/api/vector-search',
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    complete(query)
    setQuery('')  // This clears the input after submission.
  }
  React.useEffect(() => {
    if (completion && !error) {
      setAlertText('I have an answer for you!');
    } else {
      setAlertText('');  // Clear the alert text in other cases
    }
  }, [completion, error]);
  return (
    <div className="search-page-container">
      <header className="search-header">
        <h1>Documentation Smart Search</h1>
        <p>Hello! I am a helper bot that can answer your questions about Remote Incident Manager. Enter a query and I will answer it to the best of my ability.</p>
        <hr />
      </header>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4 text-slate-700">
          {query && (
            <div className="flex gap-4">
              <span className="bg-slate-100 dark:bg-slate-300 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                <User width={18} />
              </span>
              <p className="mt-0.5 font-semibold text-slate-700 dark:text-slate-100">{query}</p>
            </div>
          )}

          {isLoading && (
            <div className="animate-spin relative flex w-5 h-5 ml-2">
              <Loader />
            </div>
          )}

          {error && (
            <div className="flex items-center gap-4">
              <span className="bg-red-100 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                <Frown width={18} />
              </span>
              <span className="text-slate-700 dark:text-slate-100">
                Sad news, the search has failed! Please try again.
              </span>
            </div>
          )}

{alertText && (
        <div role="alert" aria-live="polite">{alertText}</div>
      )}
          {completion && !error && (
            <div className="flex items-center gap-4 dark:text-white">
              <span className="bg-green-500 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                <Wand width={18} className="text-white" />
              </span>
              <h3 className="font-semibold">Answer:</h3>
              {completion}
            </div>
          )}

          <div className="relative">
            <Input
              placeholder="Ask a question..."
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="col-span-3"
            />
            <CornerDownLeft
              className={`absolute top-3 right-5 h-4 w-4 text-gray-300 transition-opacity ${
                query ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </div>
        <footer className="search-footer">
          <Button type="submit" className="bg-red-500">
            Ask
          </Button>
        </footer>
      </form>
    </div>
  )
}
