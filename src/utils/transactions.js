import web3utils from 'web3-utils';
import config from '../../app.config'
const WEI_IN_ = 1000000000000000000;

/**
 * @return {number}
 */
export function WEITo(_value) {
    return (_value / WEI_IN_);
}

/**
 * @return {number}
 */
export function ToWEI(_value) {
    return _value * WEI_IN_;
}

/**
 * @param {*} _value
 * @param {number} [_tokenPrice]
 * @return {number}
 */
export function ToUSD(_value, _tokenPrice) {
    return _value * (_tokenPrice || config.publicSalePrice);
}

/**
 * Check if given string is transaction hash, address or block number.
 *
 * @return {'transaction_hash' | 'address' | 'block' | ''}
 */
export function getTypeByStr(_str) {
    let type = '';
    let num = 0;

    if (_str) {
        if (web3utils.isHexStrict(_str)) {
            if (_str.length === 66) {
                type = 'transaction_hash';
            // } else if (web3utils.toChecksumAddress(_str)) {
            } else if (web3utils.isAddress(_str)) {
                type = 'address';
            }
        } else {
            num = parseInt(_str);
            if (!isNaN(num)) {
                type = 'block';
            }
        }
    }

    return type;
}
