export default function PrivacyTrigger() {
  return (
    <button type="button" className="footer-privacy-link" onClick={() => window.dispatchEvent(new Event('open-privacy'))}>
      Sigilo e privacidade
    </button>
  );
}
