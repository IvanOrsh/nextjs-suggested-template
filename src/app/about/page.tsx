export default function AboutPage() {
  return (
    <section className="space-y-4 p-2">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 sm:text-3xl">
        Layout Example (About)
      </h2>
      <p className="text-gray-600 dark:text-gray-400 sm:text-lg">
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we&apos;re returning a
        function, we can have complex nested layouts if desired.
      </p>
      <p className="text-gray-600 dark:text-gray-400 sm:text-lg">
        When navigating between pages, we want to persist page state (input
        values, scroll position, etc.) for a Single-Page Application (SPA)
        experience.
      </p>
      <p className="text-gray-600 dark:text-gray-400 sm:text-lg">
        This layout pattern will allow for state persistence because the React
        component tree is persisted between page transitions. To preserve state,
        we need to prevent the React component tree from being discarded between
        page transitions.
      </p>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 sm:text-2xl">
        Try It Out
      </h3>
      <p className="text-gray-600 dark:text-gray-400 sm:text-lg">
        To visualize this, try tying in the search input in the{" "}
        <code>Sidebar</code> and then changing routes. You&apos;ll notice the
        input state is persisted.
      </p>
    </section>
  );
}
