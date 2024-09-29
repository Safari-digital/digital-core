import { joinTruthy } from '../../extensions/Array';
import { isEmpty } from '../../extensions/String';
import { actionKeywords, booleanKeywords, excludedKeywords } from './keywords';

/**
 * Resolve props to class names
 */
const resolveProps = (baseClass: string, props: Record<string, any>) => {
    const returnReduced = (acc: string, resolved: string) => (isEmpty(acc) ? resolved : `${acc} ${resolved}`);

    const resolved = Object.keys(props).reduce((acc, key) => {
        if (
            !props[key] ||
            (typeof props[key] === 'string' && isEmpty(props[key])) ||
            excludedKeywords.includes(key) ||
            key.startsWith('aria') ||
            key.startsWith('data')
        ) {
            return acc;
        }
        if (key === 'className' || key === 'class') {
            return returnReduced(acc, props[key]);
        }
        if (actionKeywords.includes(key) && typeof props[key] === 'function') {
            return returnReduced(acc, joinTruthy([baseClass, 'action'], '-'));
        }
        if (booleanKeywords.includes(key) && props[key] === true) {
            return returnReduced(acc, joinTruthy([baseClass, key], '-'));
        }
        if (typeof props[key] === 'string' || typeof props[key] === 'number') {
            return returnReduced(acc, joinTruthy([baseClass, key, props[key]], '-'));
        }
        return acc;
    }, '');

    return isEmpty(resolved) ? baseClass : `${baseClass} ${resolved}`;
};

export default { resolveProps };
