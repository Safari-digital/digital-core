import { expect, test } from 'vitest';
import { resolveProps } from './ClassName';
import { excludedKeywords } from './keywords';

const base = 'Component';

test('ClassName.resolveProps(): With className, should return merged classNames', () => {
    expect(resolveProps(base, { className: 'custom custom-stuff custom-thing' })).toBe(
        `${base} custom custom-stuff custom-thing`,
    );
});

test('ClassName.resolveProps(): With aria property, should ignore property', () => {
    expect(resolveProps(base, { 'aria-hidden': true })).toBe(base);
});

test('ClassName.resolveProps(): With data property, should ignore property', () => {
    expect(resolveProps(base, { 'data-id': '1' })).toBe(base);
});

test('ClassName.resolveProps(): With event function property, should return "action" keyword', () => {
    expect(resolveProps(base, { onClick: () => void 0 })).toBe(`${base} ${base}-action`);
});

test('ClassName.resolveProps(): With boolean property, should return "property" keyword', () => {
    expect(resolveProps(base, { disabled: true })).toBe(`${base} ${base}-disabled`);
});

test('ClassName.resolveProps(): With falsy property, should ignore property', () => {
    expect(resolveProps(base, { disabled: false })).toBe(base);
});

test('ClassName.resolveProps(): With string property, should return "property-value" keyword', () => {
    expect(resolveProps(base, { variant: 'primary' })).toBe(`${base} ${base}-variant-primary`);
});

test('ClassName.resolveProps(): With number property, should return "property-value" keyword', () => {
    expect(resolveProps(base, { size: 2 })).toBe(`${base} ${base}-size-2`);
});

test('ClassName.resolveProps(): With empty string property, should ignore property', () => {
    expect(resolveProps(base, { variant: '' })).toBe(base);
});

test('ClassName.resolveProps(): With many properties, should return merged classNames', () => {
    expect(
        resolveProps(base, {
            className: 'custom',
            loading: true,
            disabled: false,
            selected: true,
            fullwidth: false,
            onClick: () => void 0,
        }),
    ).toBe(`${base} custom ${base}-loading ${base}-selected ${base}-action`);
});

test('ClassName.resolveProps(): With excluded property, should ignore property', () => {
    for (const key of excludedKeywords) {
        expect(resolveProps(base, { [key]: 'value' })).toBe(base);
    }
});
