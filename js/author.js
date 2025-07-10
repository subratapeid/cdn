(function () {
    const runScript = () => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('author')) {
            const newBody = document.createElement('body');
            newBody.style.margin = '0';
            newBody.style.fontFamily = 'sans-serif';
            newBody.innerHTML = `
        <div style="min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #fffbe6; padding: 40px;">
          <div style="max-width: 700px; width: 100%; background: white; border: 2px solid #ffc107; border-radius: 10px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
            <h2 style="margin-top: 0; color: #d35400;">👨‍💻 Developed by Subrata</h2>
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              This page or tool has been proudly designed and developed by <strong>Subrata</strong> from India 🇮🇳. <br><br>
              You're seeing this page with <code>?author</code> in the URL — which acts as a digital signature to prove my authorship and ownership of the work.<br><br>
              I build simple, powerful, and user-friendly web applications with love and clean code. This is part of my commitment to transparency and originality in every project I create.
            </p>
            <p style="margin-top: 20px; font-size: 15px;">
              📌 If you want to verify or know more about my work, feel free to visit my profile:
              <br>
              <a href="https://subratap.gitlab.io/profile" target="_blank" style="color: #2980b9; text-decoration: underline;">🌐 subratap.gitlab.io/profile</a>
            </p>
            <p style="margin-top: 20px; font-size: 14px; color: #777;">
              💡 Tip: Add <code>?author</code> to the URL of any project made by me to see this authorship proof.
            </p>
          </div>
        </div>
      `;
            document.documentElement.replaceChild(newBody, document.body);
        }
    };

    // ✅ Run immediately if body is ready, otherwise wait for DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', runScript);
    } else {
        runScript();
    }
})();
