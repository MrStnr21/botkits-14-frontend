/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import {
  shareTableModalButtons,
  shareRows,
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

const Share: FC = (): JSX.Element => {
  const { isModalOpen, closeModal, openModal } = useModal();

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
        // при переполнении таблицы колонками задаём минимальную ширину таблицы больше минимальной
        // ширины box и получаем горизонтальный скролл внутри box
        minTableWidth="1360px"
        pagination
        check
        toolbar
        dropdown
        columns={shareCols}
        headComponent={ppHeadCell}
        tableData={shareRows}
        rowStyle={rowStyleRef}
        cellStyle={cellStyle}
        shadow={1}
        menuOptions={shareTableModalButtons}
      />
      {isModalOpen && (
        <ModalPopup onClick={closeModal}>
          <ShareBotPopup onCancelClick={closeModal} />
        </ModalPopup>
      )}
    </div>
  );
};

export default Share;
