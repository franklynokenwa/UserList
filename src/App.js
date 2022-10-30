import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AccountList from "./components/AccountList";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AccountList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
