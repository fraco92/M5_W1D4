import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { useEffect } from "react";
import { getBookComments } from "../../api/api";
import { CommentList } from "./CommentList";
import { AddComment } from "./AddComment";

export const CommentArea = ({ open, onClose, asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (open && comments.length === 0) {
      getBookComments(asin).then((comments) => {
        setComments(comments);
      });
    }
  }, [open]);

  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="pb-4 text-3xl font-medium leading-6 text-gray-900"
                  >
                    Commenti
                  </Dialog.Title>
                  <div className="mt-2">
                    <CommentList comments={comments} />
                  </div>
                  <AddComment asin={asin} />
                  <div className="mt-4 flex justify-between">
                    <button
                      className="px-2 border rounded-md border-slate-300 focus:outline-none focus:border-slate-400 hover:bg-red-200"
                      onClick={onClose}
                    >
                      Chiudi
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
