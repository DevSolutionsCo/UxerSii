import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId:
    "Ab6Uit0VzVmguXhuDK5ZSBtbU7-9-M-pKRDaTYjrFSyGyFQH7HR2fZ5f1JnkDcJx4VdfTlC_7enYjXR8",
  currency: "USD",
  intent: "capture",
};
function PayPalButton() {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons />
    </PayPalScriptProvider>
  );
}

export default PayPalButton;
