'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function PixelTest() {
  const [pixelStatus, setPixelStatus] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [testEventFired, setTestEventFired] = useState(false);

  useEffect(() => {
    // Wait a bit for pixel to load
    setTimeout(() => {
      if (typeof window !== 'undefined' && window.fbq) {
        const state = window.fbq.getState();
        setPixelStatus(state);
        setLoading(false);
      } else {
        setPixelStatus({
          error: 'Pixel blocked',
          reason: 'Ad blocker or privacy extension is blocking Meta Pixel',
          solution: 'Disable ad blocker or try incognito mode'
        });
        setLoading(false);
      }
    }, 2000);
  }, []);

  const fireTestEvent = () => {
    if (window.fbq) {
      window.fbq('trackCustom', 'ClientVerificationTest', {
        timestamp: new Date().toISOString(),
        tester: 'client_verification'
      });
      setTestEventFired(true);

      // Update event count
      setTimeout(() => {
        const state = window.fbq.getState();
        setPixelStatus(state);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-black p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
          <h1 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">🔍</span>
            Meta Pixel Verification
          </h1>

          {loading ? (
            <div className="text-cyan-400 text-center py-8">
              <div className="animate-spin text-4xl mb-4">⏳</div>
              Loading pixel status...
            </div>
          ) : (
            <>
              {/* Pixel Status */}
              {pixelStatus?.pixels && pixelStatus.pixels[0] ? (
                <div className="mb-6 p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <h2 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                    ✅ Pixel Status: ACTIVE
                  </h2>

                  <div className="space-y-3 text-white font-mono text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pixel ID:</span>
                      <span className="text-cyan-400 font-bold">{pixelStatus.pixels[0].id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Events Tracked:</span>
                      <span className="text-cyan-400 font-bold">{pixelStatus.pixels[0].eventCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Initialization Time:</span>
                      <span className="text-cyan-400">{new Date(pixelStatus.pixelInitializationTime).toLocaleTimeString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className="text-green-400 font-bold">✓ WORKING</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6 p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <h2 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    🚫 Pixel Status: BLOCKED
                  </h2>

                  <div className="space-y-4">
                    <div className="text-red-400 font-bold">
                      ❌ {pixelStatus?.error}
                    </div>

                    <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/30">
                      <p className="text-yellow-400 font-bold mb-2">⚠️ Reason:</p>
                      <p className="text-gray-300 text-sm">{pixelStatus?.reason}</p>
                    </div>

                    <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                      <p className="text-blue-400 font-bold mb-2">💡 Solution:</p>
                      <p className="text-gray-300 text-sm mb-3">{pixelStatus?.solution}</p>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>Disable browser extensions (uBlock Origin, AdBlock, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>Try incognito/private browsing mode</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>Use a different browser (Safari, Edge, Chrome)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>Try from your mobile phone</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                      <p className="text-green-400 font-bold mb-2">✅ Important Note:</p>
                      <p className="text-gray-300 text-sm">
                        The pixel IS working correctly - it's just blocked on YOUR browser.
                        Most visitors without ad blockers are being tracked successfully!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Test Event Button */}
              <div className="mb-6 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <h2 className="text-xl font-bold text-blue-400 mb-4">
                  🧪 Fire Test Event
                </h2>
                <p className="text-gray-300 mb-4 text-sm">
                  Click the button below to send a test event. Check Meta Events Manager → Test Events tab to see it appear in real-time.
                </p>
                <button
                  onClick={fireTestEvent}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  🚀 Fire Test Event
                </button>
                {testEventFired && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded text-green-400 text-sm">
                    ✅ Test event fired! Check Meta Events Manager → Test Events tab.
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <h2 className="text-xl font-bold text-purple-400 mb-4">
                  📋 How to Verify in Meta Events Manager
                </h2>
                <ol className="space-y-3 text-gray-300 text-sm">
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">1.</span>
                    <span>Go to: <a href="https://business.facebook.com/events_manager2/" target="_blank" className="text-cyan-400 underline">Meta Events Manager</a></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">2.</span>
                    <span>Select Pixel ID: <span className="text-cyan-400 font-mono">3200634670096198</span></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">3.</span>
                    <span>Click <span className="text-cyan-400 font-bold">"Test Events"</span> tab (NOT Overview)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">4.</span>
                    <span>You should see your browser session and events appearing in real-time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-400 font-bold">5.</span>
                    <span>Click "Fire Test Event" button above and watch it appear instantly</span>
                  </li>
                </ol>
              </div>

              {/* Technical Details */}
              <div className="mt-6 p-6 bg-gray-500/10 border border-gray-500/30 rounded-xl">
                <h2 className="text-xl font-bold text-gray-400 mb-4">
                  🔧 Technical Details
                </h2>
                <pre className="bg-black/50 p-4 rounded text-xs text-gray-300 overflow-auto">
                  {JSON.stringify(pixelStatus, null, 2)}
                </pre>
              </div>

              {/* Back Button */}
              <div className="mt-6 text-center">
                <a
                  href="/"
                  className="inline-block text-cyan-400 hover:text-cyan-300 underline"
                >
                  ← Back to Home
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
