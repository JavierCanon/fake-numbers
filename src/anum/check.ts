/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import CheckResult from '../CheckResult';

const check = (input: string): CheckResult<{}> => {
    let value = input.replace(/\s/g, '');
    if (value.substr(0, 2) === 'HU') {
        value = value.substr(2);
    }
    if (!/^\d{8}$/.test(value)) {
        return { valid: false };
    }

    const digits = value.split('').map((c) => parseInt(c, 10));
    const weight = [9, 7, 3, 1, 9, 7, 3, 1];
    const sum = digits.map((v, i) => v * weight[i]).reduce((a, b) => a + b, 0);

    return { valid: sum % 10 === 0 };
}

export default check;
