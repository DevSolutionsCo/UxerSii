import BotonLogin from "@/components/Signed out/login/BotonLogin";

function getCookie(name: string): string | null {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
      const cookie = cookieArray[i].trim();
      if (cookie.indexOf(cookieName) == 0) {
          return JSON.parse(cookie.substring(cookieName.length, cookie.length));
      }
  }

  return null;
}

function CardTotalTicket() {
  const total = getCookie("totalCarrito");

  return (
    <>
      <section className="my-4 mx-2 sm:mx-12 p-2 border shadow-black/50 shadow-sm rounded-md flex flex-col h-full bg-white">
        <div className="my-5 mx-2">
          <span className="font-bold">Revision de compra</span>
        </div>
        <hr />
        <div className="my-5 mx-2">
          <p className="text-lg">
            Subtotal (x Productos){" "}
            <span className="font-bold">{total}</span>
          </p>
        </div>
        <BotonLogin className="mt-2 bg-[#B9F0D1] border-2 px-4 py-2 rounded-md font-bold text-black w-full">
          {" "}
          {/* Eliminamos self-end */}
          Crear Ticket de Compra
        </BotonLogin>
      </section>
    </>
  );
}

export default CardTotalTicket;
