import { useCallback, useRef } from "react";
import { Button, Modal } from "react-daisyui";

const BookingDetailModal = ({ booking }) => {
  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);
  return (
    <div className="font-sans rounded-xl">
      <Button
        className="btn btn-primary hover:border hover:border-green-500 hover:bg-slate-200 hover:text-black border-0 text-white bg-green-500"
        onClick={handleShow}
      >
        Detail
      </Button>
      <Modal className="p-6 rounded-xl" ref={ref}>
        <form method="dialog">
          <Button
            size="sm"
            color="ghost"
            shape="circle"
            className="absolute right-2 top-2"
          >
            x
          </Button>
        </form>
        <Modal.Header className="font-bold">
          {booking.facility?.name}
        </Modal.Header>
        <Modal.Body>
          <p className="mt-3">Date : {booking.date}</p>
          <p className="mt-3">From : {booking.startTime}</p>
          <p className="mt-3">To : {booking.endTime}</p>
          <p className="mt-3">Price : ${booking.payableAmount}</p>
          <p className="mt-3">Location : {booking.facility?.location}</p>
          <p className="mt-3">Description : {booking.facility?.description}</p>
          <p className="mt-3">Transaction Id : {booking.tranId}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BookingDetailModal;
