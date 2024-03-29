/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  shareTableModalButtons,
  shareCols,
  cellStyle,
  rowStyleRef,
} from './shareConfig';
import stylesShare from './share.module.scss';
import EnhancedTable from '../../components/enhanced-table/enhanced-table';
import { ppHeadCell } from '../../components/table-cells/table-cells';
import Button from '../../ui/buttons/button/button';
import Typography from '../../ui/typography/typography';
import useModal from '../../services/hooks/use-modal';
import ModalPopup from '../../components/popups/modal-popup/modal-popup';
import ShareBotPopup from '../../components/popups/share-bot-popup/share-bot';
import {
  getSharedAccesses,
  patchSharedAccess,
  postSharedAccess,
} from '../../api/shared';
import { useAppDispatch } from '../../services/hooks/hooks';
import { createAddErrorAction } from '../../services/actions/errors/errors';

const Share: FC = () => {
  const { isModalOpen, closeModal, openModal } = useModal();

  const [loading, setLoading] = useState(false);
  const [sharedAccesses, setSharedAccesses] = useState<any>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    getSharedAccesses()
      .then((responseData) => {
        setSharedAccesses(
          // eslint-disable-next-line no-underscore-dangle
          responseData.map((item) => ({ ...item, id: item._id }))
          // уникальный, чтобы не ругалась консоль
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isModalOpen]);

  // const removeEmail = (inputValue: string) => {
  //   const atIndex = inputValue.indexOf('@');
  //   if (atIndex !== -1) {
  //     return inputValue.substring(0, atIndex);
  //   }
  //   return inputValue;
  // };

  const addTableData = (inputValue: string) => {
    if (inputValue) {
      const newRow = {
        email: inputValue,
      };
      postSharedAccess(newRow)
        .catch(() => {
          dispatch(createAddErrorAction('Не удалось предоставить доступ'));
        })
        .finally(() => {
          closeModal();
        });
    }
  };

  return (
    <div className={stylesShare.share}>
      <div className={stylesShare.share__header}>
        <div>
          <Typography
            tag="h2"
            fontFamily="secondary"
            className={stylesShare.share__title}
          >
            Общий доступ
          </Typography>
        </div>
        <div className={stylesShare.share__buttonWrapper}>
          <Button
            variant="default"
            size="small"
            color="green"
            buttonHtmlType="submit"
            onClick={openModal}
          >
            Добавить
          </Button>
        </div>
      </div>
      <EnhancedTable
        pagination
        check
        toolbar
        dropdown
        columns={shareCols}
        headComponent={ppHeadCell}
        tableData={sharedAccesses}
        rowStyle={rowStyleRef}
        cellStyle={cellStyle}
        shadow={1}
        menuOptions={shareTableModalButtons}
        setTableData={setSharedAccesses}
        loading={loading}
        onUpdate={patchSharedAccess}
      />
      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <ShareBotPopup
            onCancelClick={closeModal}
            onSubmitClick={addTableData}
          />
        </ModalPopup>
      )}
    </div>
  );
};

export default Share;
