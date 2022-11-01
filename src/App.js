import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AccountList from "./components/AccountList";
import CreateAccount from "./components/CreateAccount";
import StyledApp from "./styles/App.styled";
import GlobalStyle from "./styles/Global.styled";



function App() {
  const queryClient = new QueryClient();

  return (
    <StyledApp>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle/>
        <AccountList />
        <CreateAccount />
      </QueryClientProvider>
    </StyledApp>
  );
}

export default App;
