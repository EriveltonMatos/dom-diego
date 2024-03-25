export const Footer = () => {
  return (
    <footer className="bg-orange-950 ">
      <hr style={{ borderTop: "5px solid #000" }} /> {/* Linha separadora */}
      <div style={{ textAlign: "center", padding: "20px" }}>
        <div>
          <h1 className="text-white">
            Copyright @ 2024 - Criado por  <a href="https://erivelton-portfolio.vercel.app/"><span className="text-orange-700 font-bold hover:underline transition-colors">Erivelton Matos</span>
            </a>
          </h1>
        </div>
      </div>
    </footer>
  );
};
