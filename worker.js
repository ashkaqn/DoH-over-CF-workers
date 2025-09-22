addEventListener(
    "fetch", event => {
        let url = new URL(event.request.url);
        url.hostname = "cloudflare-dns.com"; //dns.google also usable                      
        url.protocol = "https";
        url.pathname = "dns-query";
        //url.port = "443";
        let request = new Request(url, event.request);
        event.respondWith(
            fetch(request)
        )
    }
)