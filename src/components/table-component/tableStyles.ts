export const paperStyles = {
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: 'inherit',
  borderRadius: '30px',
  padding: '32px',
};
export const paginationStyles = {
  width: '100%',
  position: 'relative',
  '.root': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: '32px 0 0 0',
  },
  '& .MuiTablePagination-actions': {
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '14px',
  },
  '& .MuiTablePagination-displayedRows': {
    display: 'none',
  },
  '& .MuiTablePagination-select': {
    backgroundColor: '#F8F9FB',
    width: '80px',
    height: '40px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
  },
};
export const checkBoxStyles = {
  root: {
    backgroundColor: '#ECEFFF',
    width: '100%',
    borderRadius: '10px 0 0 10px',
  },
  checked: {
    backgroundColor: '#ECEFFF',
    width: '100%',
    borderRadius: '10px 0 0 10px',
  },
};
