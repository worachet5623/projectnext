import AdminHeader from '../component/layout/admin.header';
import AdminSiderbar from '../component/layout/admin.menu';
import AdminFooter from '../component/layout/admin.footer';
import Head from 'next/head';
import Link from "next/link";
/* สวัสดี index */
export default function Home() {
  return (
  <div>
    <Head>
      <title>ice | Home</title>
    </Head>
    <AdminHeader />
    <AdminSiderbar />
{/*     <div className="content-wrapper text-center">
    <h1>Hello world</h1>
    <br />
    <h1>My name is</h1>
    <br />
    <h2>worachet raphukhiew</h2>
    </div> */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Home</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link href="/"><a href="#">Home</a></Link></li>
            <li className="breadcrumb-item active">Home</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  </div>
  


<AdminFooter />
    </div>
  )
}