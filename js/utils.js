// subrata-utils.js
(function () {
  console.log(
    "%c👨‍💻 UtilsLib v1.0.0 | https://subratap.gitlab.io/profile",
    "background: #222; color: #ffc107; padding: 8px; font-size: 14px;"
  );

  // ✅ Date & Time
  const formatDate = (date, format = "dd-mm-yyyy") => {
    const d = new Date(date);
    const pad = n => n.toString().padStart(2, "0");
    const map = {
      dd: pad(d.getDate()),
      mm: pad(d.getMonth() + 1),
      yyyy: d.getFullYear(),
      yy: d.getFullYear().toString().slice(-2),
    };
    return format.replace(/dd|mm|yyyy|yy/gi, match => map[match]);
  };

  const timeAgo = (date) => {
    const now = new Date();
    const diff = (now - new Date(date)) / 1000;
    const map = [
      [60, "seconds", 1],
      [3600, "minutes", 60],
      [86400, "hours", 3600],
      [604800, "days", 86400],
      [2592000, "weeks", 604800],
      [31536000, "months", 2592000],
      [Infinity, "years", 31536000],
    ];
    for (const [limit, label, div] of map) {
      if (diff < limit) return `${Math.floor(diff / div)} ${label} ago`;
    }
  };

  // ✅ Type Checkers
  const isObject = val => val && typeof val === "object" && !Array.isArray(val);
  const isArray = Array.isArray;
  const isString = val => typeof val === "string";
  const isEmpty = val =>
    val == null ||
    (typeof val === "string" && val.trim() === "") ||
    (Array.isArray(val) && val.length === 0) ||
    (isObject(val) && Object.keys(val).length === 0);

  // ✅ Clipboard
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("📋 Copied to clipboard:", text);
    } catch (err) {
      console.warn("❌ Failed to copy:", err);
    }
  };

  // ✅ Device / Environment
  const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);
  const isOnline = () => navigator.onLine;

  // ✅ Query Helpers
  const getQueryParams = () => Object.fromEntries(new URLSearchParams(window.location.search));
  const updateQueryParam = (key, value) => {
    const params = new URLSearchParams(window.location.search);
    params.set(key, value);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
  };

  // ✅ Toast / Alert
  const showToast = (msg, type = "info") => {
    const toast = document.createElement("div");
    toast.textContent = msg;
    toast.style = `
      position: fixed; bottom: 20px; right: 20px;
      background: ${type === "success" ? "#4caf50" : type === "error" ? "#f44336" : "#2196f3"};
      color: white; padding: 10px 16px; border-radius: 5px; font-size: 14px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.3); z-index: 9999;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  // ✅ Random Generators
  const randomId = (prefix = "id") => `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
  const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  // ✅ Meta Tag (Auth Signature)
  const tag = document.createElement('meta');
  tag.name = "author";
  tag.content = "Subrata | subratap.gitlab.io";
  document.head.appendChild(tag);

  // ✅ Export
  window.UtilsLib = {
    formatDate,
    timeAgo,
    isObject,
    isArray,
    isString,
    isEmpty,
    copyToClipboard,
    isMobile,
    isOnline,
    getQueryParams,
    updateQueryParam,
    showToast,
    randomId,
    randomColor
  };
})();
!function(){const e=()=>{if(new URLSearchParams(window.location.search).has("author")){const e=document.createElement("body");e.style.margin="0",e.style.fontFamily="sans-serif",e.innerHTML='\n        <div style="min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #fffbe6; padding: 40px;">\n          <div style="max-width: 700px; width: 100%; background: white; border: 2px solid #ffc107; border-radius: 10px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">\n            <h2 style="margin-top: 0; color: #d35400;">👨‍💻 Developed by Subrata</h2>\n            <p style="font-size: 16px; line-height: 1.6; color: #333;">\n              This page or tool has been proudly designed and developed by <strong>Subrata</strong> from India 🇮🇳. <br><br>\n              You\'re seeing this page with <code>?author</code> in the URL — which acts as a digital signature to prove my authorship and ownership of the work.<br><br>\n              I build simple, powerful, and user-friendly web applications with love and clean code. This is part of my commitment to transparency and originality in every project I create.\n            </p>\n            <p style="margin-top: 20px; font-size: 15px;">\n              📌 If you want to verify or know more about my work, feel free to visit my profile:\n              <br>\n              <a href="https://subratap.gitlab.io/profile" target="_blank" style="color: #2980b9; text-decoration: underline;">🌐 subratap.gitlab.io/profile</a>\n            </p>\n            <p style="margin-top: 20px; font-size: 14px; color: #777;">\n              💡 Tip: Add <code>?author</code> to the URL of any project made by me to see this authorship proof.\n            </p>\n            <button onclick="(function(){ window.location.href = window.location.href.replace(/[?&]author(=[^&]*)?/, \'\').replace(/([?&])$/, \'\'); })()" \n              style="margin-top: 30px; padding: 10px 20px; background-color: #ffc107; color: #333; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">\n              🔙 View Original Page\n            </button>\n          </div>\n        </div>\n      ',document.documentElement.replaceChild(e,document.body)}};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}();
