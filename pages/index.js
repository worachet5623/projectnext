import AdminHeader from '../component/layout/admin.header';
import AdminSiderbar from '../component/layout/admin.menu';
import AdminFooter from '../component/layout/admin.footer';

export default function Home() {
  return (
  <div>
    <AdminHeader />
    <AdminSiderbar />
    <div className="content-wrapper text-center">
    <h1>Hello world</h1>
    <br />
    <h1>My name is</h1>
    <br />
    <h2>worachet raphukhiew</h2>
    </div>
<AdminFooter />
    </div>
  )
}