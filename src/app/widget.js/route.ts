export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * GET /widget.js
 * Script JS à embeder sur d'autres sites :
 *   <script src="https://kinky.pixeeplay.com/widget.js" data-topic="testimonies"></script>
 *
 * Crée une iframe ou injecte des cards avec les derniers témoignages Kinky.
 */
export async function GET() {
  const js = `(function() {
  var script = document.currentScript;
  if (!script) return;
  var topic = script.dataset.topic || 'testimonies';
  var origin = '${process.env.NEXT_PUBLIC_SITE_URL || 'https://kinky.pixeeplay.com'}';

  var iframe = document.createElement('iframe');
  iframe.src = origin + '/embed/' + topic;
  iframe.style.cssText = 'width:100%;border:none;min-height:400px;background:transparent;';
  iframe.allow = 'autoplay';
  iframe.title = 'KinkySexy — ' + topic;
  script.parentNode.insertBefore(iframe, script.nextSibling);
})();`;
  return new Response(js, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
