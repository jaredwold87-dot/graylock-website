import { Helmet } from "react-helmet-async";

export function FunnelMetaPixel() {
  const pixelId = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
  if (!pixelId) return null;

  const script = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${pixelId}');
fbq('track', 'PageView');`;

  return (
    <Helmet>
      <script>{script}</script>
      <noscript>{`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1"/>`}</noscript>
    </Helmet>
  );
}

interface FunnelShellProps {
  children: React.ReactNode;
  showLegal?: boolean;
}

export function FunnelShell({ children, showLegal = false }: FunnelShellProps) {
  return (
    <div className="min-h-screen bg-navy flex flex-col">
      <header className="w-full px-6 md:px-12 py-5 flex items-center justify-center md:justify-start border-b border-white/5">
        <a href="/" className="block">
          <img
            src={`${import.meta.env.BASE_URL}logo-stacked.png`}
            alt="Graylock Digital"
            className="h-12 w-auto"
          />
        </a>
      </header>
      <main className="flex-grow">{children}</main>
      {showLegal && (
        <footer className="w-full px-6 py-6 text-center text-xs font-sans text-white/55 border-t border-white/5">
          <p className="mb-1">
            © {new Date().getFullYear()} Graylock Digital. All rights reserved.
          </p>
          <p className="space-x-3">
            <a
              href="/privacy-policy"
              className="hover:text-orange transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white/25">•</span>
            <a
              href="/terms-of-service"
              className="hover:text-orange transition-colors"
            >
              Terms of Service
            </a>
          </p>
        </footer>
      )}
    </div>
  );
}
