/* eslint-disable react/no-array-index-key */
import { FC } from 'react';

import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import ConstructorDefaultButton from '../../../../ui/buttons/constructor-default-button/constructor-default-button';
import ControlLayout from '../../control-layout/control-layout';
import Input from '../../../../ui/inputs/input/input';
import styles from './api-block.module.scss';
import { TBlockProps, TApiBlock } from '../../../../services/types/builder';
import LabeledInput from '../../labeledInput/labeledInput';
import ValField from './val-field/val-filed';
import RequestSettings from './req-setting/req-setting';
import { setFlowDataInit } from '../../utils';
import { addVariableFlow, setVariableFlow } from './flow';

const ApiBlockNode: FC<TBlockProps<TApiBlock>> = ({ data }) => {
  const setFlowData = setFlowDataInit();
  const setUrl = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFlowData({ path: ['data', 'url'], value: e.target.value });
  const setGetType = () =>
    setFlowData({ path: ['data', 'reqType'], value: 'get' });
  const setPostType = () =>
    setFlowData({ path: ['data', 'reqType'], value: 'post' });

  const addVariableField = addVariableFlow();
  const addHeadersAndParamsField = (
    field: 'headers' | 'params',
    type: 'variable' | 'const'
  ) => {
    setFlowData({
      path: ['data', field],
      value: [...data[field], { type, name: '', variable: '' }],
    });
  };
  const setVariable = setVariableFlow();

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

  const getVariableFields = () => {
    return data.variables.map((item, index) => {
      return (
        <Input
          styled="bot-builder-default"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setVariable(event.target)
          }
          placeholder="Переменная"
          value={item.name || ''}
          minLength={0}
          key={index}
          id={item.id}
        />
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
          addFieldVariable={() =>
            addHeadersAndParamsField('headers', 'variable')
          }
          addFieldConst={() => addHeadersAndParamsField('headers', 'const')}
          title="Заголовок"
        />
        <RequestSettings
          variableFields={getParamFields('variable')}
          constFields={getParamFields('const')}
          addFieldVariable={() =>
            addHeadersAndParamsField('params', 'variable')
          }
          addFieldConst={() => addHeadersAndParamsField('params', 'const')}
          title="Параметр"
        />
        <LabeledInput title="Сохранить результат">
          <div className={styles.field_blocks}>
            <div className={styles.fields}>
              {getVariableFields()}
              <ConstructorAddButton
                buttonHtmlType="button"
                disabled={false}
                onClick={addVariableField}
              >
                Переменная
              </ConstructorAddButton>
            </div>
          </div>
        </LabeledInput>
      </div>
    </ControlLayout>
  );
};

export default ApiBlockNode;
