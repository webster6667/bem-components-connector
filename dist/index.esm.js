var classname = {exports: {}};

var classname_production_min = {};

function r(r){function e(e,i,a,o){var f=i?t+e+r.e+i:t+e,v=f;if(a){var u=' '+v+r.m;for(var s in a)if(a.hasOwnProperty(s)){var p=a[s];1==p?v+=u+s:p&&(v+=u+s+n+p);}}if(void 0!==o)for(var c=0,l=o.length;c<l;c++){var y=o[c];if(y&&'string'==typeof y.valueOf())for(var g=y.valueOf().split(' '),d=0;d<g.length;d++){var h=g[d];h!==f&&(v+=' '+h);}}return v}var t=r.n||'',n=r.v||r.m;return function(r,t){return function(n,i,a){return 'string'==typeof n?Array.isArray(i)?e(r,n,void 0,i):e(r,n,i,a):e(r,t,n,i)}}}Object.defineProperty(classname_production_min,'__esModule',{value:1});var e=r({e:'-',m:'_'});classname_production_min.cn=e,classname_production_min.withNaming=r;

var classname_development = {};

Object.defineProperty(classname_development, '__esModule', { value: true });

/**
 * BEM className configure function.
 *
 * @example
 * ``` ts
 *
 * import { withNaming } from '@bem-react/classname';
 *
 * const cn = withNaming({ n: 'ns-', e: '__', m: '_' });
 *
 * cn('block', 'elem'); // 'ns-block__elem'
 * ```
 *
 * @param preset settings for the naming convention
 */
function withNaming(preset) {
    var nameSpace = preset.n || '';
    var modValueDelimiter = preset.v || preset.m;
    function stringify(b, e, m, mix) {
        var entityName = e ? nameSpace + b + preset.e + e : nameSpace + b;
        var className = entityName;
        if (m) {
            var modPrefix = ' ' + className + preset.m;
            for (var k in m) {
                if (m.hasOwnProperty(k)) {
                    var modVal = m[k];
                    if (modVal === true) {
                        className += modPrefix + k;
                    }
                    else if (modVal) {
                        className += modPrefix + k + modValueDelimiter + modVal;
                    }
                }
            }
        }
        if (mix !== undefined) {
            for (var i = 0, len = mix.length; i < len; i++) {
                var value = mix[i];
                // Skipping non-string values and empty strings
                if (!value || typeof value.valueOf() !== 'string')
                    continue;
                var mixes = value.valueOf().split(' ');
                for (var j = 0; j < mixes.length; j++) {
                    var val = mixes[j];
                    if (val !== entityName) {
                        className += ' ' + val;
                    }
                }
            }
        }
        return className;
    }
    return function cnGenerator(b, e) {
        return function (elemOrMods, elemModsOrBlockMix, elemMix) {
            if (typeof elemOrMods === 'string') {
                if (Array.isArray(elemModsOrBlockMix)) {
                    return stringify(b, elemOrMods, undefined, elemModsOrBlockMix);
                }
                return stringify(b, elemOrMods, elemModsOrBlockMix, elemMix);
            }
            return stringify(b, e, elemOrMods, elemModsOrBlockMix);
        };
    };
}
/**
 * BEM Entity className initializer with React naming preset.
 *
 * @example
 * ``` ts
 *
 * import { cn } from '@bem-react/classname';
 *
 * const cat = cn('Cat');
 *
 * cat(); // Cat
 * cat({ size: 'm' }); // Cat_size_m
 * cat('Tail'); // Cat-Tail
 * cat('Tail', { length: 'small' }); // Cat-Tail_length_small
 *
 * const dogPaw = cn('Dog', 'Paw');
 *
 * dogPaw(); // Dog-Paw
 * dogPaw({ color: 'black', exists: true }); // Dog-Paw_color_black Dog-Paw_exists
 * ```
 *
 * @see https://en.bem.info/methodology/naming-convention/#react-style
 */
var cn = withNaming({
    e: '-',
    m: '_',
});

classname_development.cn = cn;
classname_development.withNaming = withNaming;

if (process.env.NODE_ENV === 'production') {
  classname.exports = classname_production_min;
} else {
  classname.exports = classname_development;
}

function camelToDash(stringForConvert) {
  var result = stringForConvert.replace(/[A-Z]/g, '-$&').toLowerCase();
  return result;
}

var bemClassName = classname.exports.withNaming({
  e: '__',
  m: '_',
  v: '-'
});

var camelCaseModifiersToDash = function camelCaseModifiersToDash(camelCaseModifiers) {
  var dashModifiers = {};
  Object.keys(camelCaseModifiers).forEach(function (camelCaseKey) {
    var dashKey = camelToDash(camelCaseKey);
    dashModifiers[dashKey] = camelCaseModifiers[camelCaseKey];
  });
  return dashModifiers;
};

var blockClassesConcat = function blockClassesConcat(blockName, modifiers) {
  var additionalClasses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var block = bemClassName(blockName),
      blockBemClasses = block(camelCaseModifiersToDash(modifiers)),
      blockClasses = "".concat(blockBemClasses, " ").concat(additionalClasses).trim();
  return blockClasses;
};

var elementClassesConcat = function elementClassesConcat(blockName, element, modifiers) {
  var additionalClasses = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var block = bemClassName(blockName),
      blockBemClasses = block(element, camelCaseModifiersToDash(modifiers)),
      blockClasses = "".concat(blockBemClasses, " ").concat(additionalClasses).trim();
  return blockClasses;
};

export { bemClassName, blockClassesConcat, elementClassesConcat };
