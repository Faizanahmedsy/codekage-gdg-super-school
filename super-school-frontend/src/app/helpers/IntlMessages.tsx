import { FormattedMessage, injectIntl } from 'react-intl';
import { allowMultiLanguage } from '@/app/constants/AppConst';
import PropTypes from 'prop-types';

const InjectMassage = (props: any) => {
  if (allowMultiLanguage) {
    return <FormattedMessage {...props} />;
  } else {
    return props.id.split('.').pop();
  }
};

InjectMassage.propTypes = {
  id: PropTypes.string,
};

export default injectIntl(InjectMassage, {
  forwardRef: false,
});
