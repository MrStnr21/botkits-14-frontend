/* eslint-disable react/no-array-index-key */
import { FC } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import ConstructorDefaultButton from '../../../../ui/buttons/constructor-default-button/constructor-default-button';
import ControlLayout from '../../control-layout/control-layout';
import Input from '../../../../ui/inputs/input/input';
import styles from './api-block.module.scss';
import { TBlockProps, TApiBlock } from '../../../../services/types/builder';
import LabeledInput from '../../labeledInput/labeledInput';
import ValField from './val-field/val-filed';
import RequestSettings from './req-setting/req-setting';
import { setFlowData } from '../../utils';

const ApiBlockNode: FC<TBlockProps<TApiBlock>> = ({ data }) => {
  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();

  const setUrl = setFlowData({ selectors: ['url'] });
  const setGetType = setFlowData({ selectors: ['reqType'], value: 'get' });
  const setPostType = setFlowData({ selectors: ['reqType'], value: 'post' });

  const addField =
    (field: 'headers' | 'params', type: 'variable' | 'const') => () =>
      setNodes(
        getNodes().map((item) => {
          if (item.id === id) {
            return {
              ...item,
              data: {
                ...item.data,
                [field]: [
                  ...item.data[field],
                  { type, name: '', variable: '' },
                ],
              },
            };
          }
          return item;
        })
      );

  const getHeaderFields = (type: 'variable' | 'const') => {
    return data.headers.map((item, index) => {
      return (
        item.type === type && (
          <ValField
            key={index}
            name={item.name || ''}
            value={item.variable || ''}
            field="headers"
            index={index}
          />
        )
      );
    });
  };

  const getParamFields = (type: 'variable' | 'const') => {
    return data.params.map((item, index) => {
      return (
        item.type === type && (
          <ValField
            key={index}
            name={item.name || ''}
            value={item.variable || ''}
            field="params"
            index={index}
          />
        )
      );
    });
  };

  return (
    <ControlLayout type="API">
      <div className={styles.container}>
        <LabeledInput title="URL стороннего сервиса">
          <Input
            placeholder="Введите URL"
            value={data.url}
            onChange={setUrl}
            styled="bot-builder-default"
            disabled={false}
            errorMessage="Неправильный URL"
            name="control"
            minLength={0}
          />
        </LabeledInput>
        <LabeledInput title="Тип запроса">
          <div className={styles.box}>
            <ConstructorDefaultButton
              buttonHtmlType="button"
              onClick={setGetType}
              disabled={false}
              isActive={data.reqType === 'get'}
            >
              Get
            </ConstructorDefaultButton>
            <ConstructorDefaultButton
              buttonHtmlType="button"
              onClick={setPostType}
              disabled={false}
              isActive={data.reqType === 'post'}
            >
              Post
            </ConstructorDefaultButton>
          </div>
        </LabeledInput>
        <RequestSettings
          variableFields={getHeaderFields('variable')}
          constFields={getHeaderFields('const')}
          addFieldVariable={addField('headers', 'variable')}
          addFieldConst={addField('headers', 'const')}
        />
        <RequestSettings
          variableFields={getParamFields('variable')}
          constFields={getParamFields('const')}
          addFieldVariable={addField('params', 'variable')}
          addFieldConst={addField('params', 'const')}
        />
        <LabeledInput title="Сохранить результат">
          <ConstructorAddButton
            buttonHtmlType="button"
            disabled={false}
            onClick={() => {}}
          >
            Переменная
          </ConstructorAddButton>
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default ApiBlockNode;
