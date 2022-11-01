import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AccountList from "./components/AccountList";
import CreateAccount from "./components/CreateAccount";


function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <AccountList />
        <CreateAccount />
      </QueryClientProvider>
    </div>
  );
}

export default App;
