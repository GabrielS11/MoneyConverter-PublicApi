import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Nav from "./components/Nav";
import { Spotlight } from "./components/ui/spotlight-new";
import CardForm from "./components/CardForm";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="relative min-h-screen flex flex-col overflow-hidden bg-background">
          <Spotlight />
          <div className="h-[10vh] w-full bg-background items-center justify-center border-white border-b ">
            <Nav></Nav>
          </div>
          <div className="bg-background h-[80vh] w-full flex items-center justify-center">
            <div className="h-[50vh] w-[60vw]">
              <CardForm />
            </div>
          </div>
          <div className="bg-background h-[20vh] w-full">Adeus</div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;

// {<Card className="w-full max-w-[60vw] h-full p-10">
//                 <CardHeader>
//                   <CardTitle>Login to your account</CardTitle>
//                   <CardDescription>
//                     Enter your email below to login to your account
//                   </CardDescription>
//                   <CardAction>
//                     <Button variant="link">Sign Up</Button>
//                   </CardAction>
//                 </CardHeader>
//                 <CardContent>
//                   <form>
//                     <div className="flex flex-col gap-6">
//                       <div className="grid gap-2">
//                         <Label asChild>
//                           <label htmlFor="email">Email</label>
//                         </Label>
//                         <Input
//                           id="email"
//                           type="email"
//                           placeholder="m@example.com"
//                           required
//                         />
//                       </div>
//                       <div className="grid gap-2">
//                         <div className="flex items-center">
//                           <Label asChild>
//                             <label htmlFor="password">Password</label>
//                           </Label>
//                         </div>
//                         <Input id="password" type="password" required />
//                       </div>
//                     </div>
//                   </form>
//                 </CardContent>
//                 <CardFooter className="flex-col gap-2">
//                   <Button type="submit" className="w-full">
//                     Login
//                   </Button>
//                 </CardFooter>
//               </Card>}
