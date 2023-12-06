import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBody from './components/HomeBody';
import { HeaderName, NavName } from './components/Header';
import { FooterName} from './components/Footer';
import { Specallss } from './components/specall';
function App() {
  return (
<html>
      <div className="container-fluid">
        <div className="row">
        <HeaderName/>
        <NavName/>
          <main className="col-md-6 ms-sm-auto col-lg-9 px-md-4">
            <section>
            <HomeBody />
            </section>
            <article>
            </article>
          </main>
          <aside className="col-md-6 ms-sm-auto col-lg-3">
        <Specallss/>
          </aside>
        </div>
      </div>
      <FooterName/>
  </html>
 )}
export default App;
