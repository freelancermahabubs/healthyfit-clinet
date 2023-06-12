import { useEffect, useState } from "react";
import useEnrollmentClass from "../../hooks/useEnrollmentClass";

const PaymtHistory = () => {
  const [enrooledClass] = useEnrollmentClass();
  // console.log(enrooledClass[0]?.studentId);

  const [paymentHistory, setPaymentHistory] = useState([]);
  // console.log(paymentHistory);
  useEffect(() => {
    if (enrooledClass.length === 0) {
      return;
    }

    const studentId = enrooledClass[0]?.studentId;
    console.log(studentId);
    console.log(enrooledClass);
    if (!studentId) {
      return;
    }
    fetch(`${import.meta.env.VITE_API_URL}/payment-history/${studentId}`)
      .then((response) => response.json())
      .then((data) => {
        setPaymentHistory(data);
      })
      .catch((error) => {
        console.error("Error retrieving payment history:", error);
      });
  }, [enrooledClass]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 font-semibold">
              Transaction ID
            </th>
            <th className="py-2 px-4 bg-gray-200 font-semibold">Price</th>
            <th className="py-2 px-4 bg-gray-200 font-semibold">Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((payment) => (
            <tr key={payment._id}>
              <td className="py-2 px-4 border">{payment.transactionId}</td>
              <td className="py-2 px-4 border">{payment.price}</td>
              <td className="py-2 px-4 border">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymtHistory;
