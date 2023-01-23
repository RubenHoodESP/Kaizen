
import { useTranslation } from 'react-i18next';
import "./Modal.css";


export const Modal = () => {

    const { t } = useTranslation();

  return (
    <>
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div className="modal-content border shadow-2xl relative flex flex-col w-full pointer-events-auto bg-clip-paddingoutline-none text-current bg-black bg-opacity-30">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-white font-roboto-condensed" id="exampleModalScrollableLabel">
                        {t('Modal.state')}
                        </h5>
                        <button type="button"
                        className="btn-close btn-close-white box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-white font-roboto relative p-4">
                        <p>{t('Modal.message')}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

