import { beforeEach, describe, expect, test, vi } from 'vitest';

describe('main.js', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.restoreAllMocks();

    document.body.innerHTML = '<div id="message"></div>';
  });

  test('affiche le message reçu depuis le back', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          json: () =>
            Promise.resolve({
              message: 'Bonjour depuis le back FastAPI',
            }),
        })
      )
    );

    await import('./main.js');

    await vi.waitFor(() => {
      expect(document.querySelector('#message').textContent).toBe(
        'Bonjour depuis le back FastAPI'
      );
    });
  });

  test('affiche un message d’erreur si le back ne répond pas', async () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.reject()));

    await import('./main.js');

    await vi.waitFor(() => {
      expect(document.querySelector('#message').textContent).toBe(
        'Impossible de joindre le back'
      );
    });
  });
});