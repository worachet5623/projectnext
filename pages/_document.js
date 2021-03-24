import Document, {Html,Head,Main,NextScript} from "next/document";
export default class Mydocument extends Document{
    render() {
        return(
            <Html>
                <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/css/adminlte.min.css" />
                </Head>
                <body className="hold-transition sidebar-mini">
                    <Main />
                    <NextScript />

                    <script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/js/adminlte.js" integrity="sha512-Qid1n+hjqGBUYI5u+5XkDMhmto5cSAw/0q4f9flUktT2zoPCwbjXrh5hKiRuTWsEWd1xcWe7rAAyr29/cR7LeA==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js" integrity="sha512-d9xgZrVZpmmQlfonhQUvTR7lMPtO7NkZMkA0ABN3PHCbKA5nqylQ/yWlFAyY6hYgdF1Qh6nYiuADWwKB4C2WSw==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/js/demo.js" integrity="sha512-MaVybC876FnZFdDbPpK/PR3Mbv2hrg02oBlWaKzm66Le5zW51JrQM5K4WBWRW3l3aXm/y2aelunq/JuXVVN6RQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.1.0/js/pages/dashboard3.js" integrity="sha512-ZGmRDhXC1RlFvkM030XW4/JAL/KrX5lYY70KgbMcjiAzS5V5sAReZ4aUfqhVVP74Aa+090XcMZhDahROHDREpA==" crossorigin="anonymous"></script>

                </body>
            </Html>
        )
    }
}