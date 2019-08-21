import {format} from 'timeago.js';
import { Toast } from 'mint-ui';

let baseOptions = {
    credentials: 'same-origin'
};

const fmtDate = (date, fmt) => { // author: meizz
    var o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S': date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
};

/**
 * 调用Timeago库显示到现在的时间
 */
const MillisecondToDate = (time) => {
    var str = '';
    if (time !== null && time !== '') {
        str = format(time, 'zh_CN');
    }
    return str;
};


export function buildQuery(query = {}) {
    let esc = encodeURIComponent;
    return Object.keys(query).map((key) => {
        return esc(key) + '=' + esc(query[key])
    }).join('&');
}

export function parseQuery(qstr) {
    if (qstr.trim().length <= 0) {
        return {};
    }
    var query = {};
    var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
    for (var i = 0; i < a.length; i++) {
        var b = a[i].split('=');
        let v = b[1] || '';
        try {
            v = decodeURIComponent(b[1] || '');
        } catch (e) {
            // TODO::
        }

        query[decodeURIComponent(b[0])] = v;
    }
    return query;
}

export const get = (url, query = {}, options = {}) => {
    let queryUrl = url;
    if (buildQuery(query) != '') {
        queryUrl += '?' + buildQuery(query);
    }
    return fetch(queryUrl, Object.assign({}, baseOptions, options)).then(res => {
        if (res.ok) {
            let json = res.clone();
            let Prodata = json.json();
            return Prodata.then(data => {
                if (!(data.success)) {
                    throw new Error(data.msg || '服务器异常');
                }
                return (data.data)
            })
        } else {
            throw new Error('服务器异常');
        }
    }).catch(err => {
        Toast({
            message: err.message || "服务器异常",
            iconClass: 'icon icon-success'
          });
          throw new Error(err.message);
    });
}

export const post = (url, form = {}, options = {}, query = {}) => {
    let formbody = Object.keys(form).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(form[key])).join('&');
    let _baseOptions = Object.assign({}, baseOptions, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formbody
    });

    let queryUrl = url;
    if (buildQuery(query) != '') {
        queryUrl += '?' + buildQuery(query);
    }
    return new Promise((resolve, reject) => {
        fetch(queryUrl, Object.assign({}, _baseOptions, options))
            .then(res => {
                if (res.ok) {
                    let json = res.clone();
                    let Prodata = json.json();
                    return Prodata.then(data => {
                        if (!(data.success)) {
                            throw new Error(data.msg || '服务器异常');
                        }
                        resolve(data)
                    })
                } else {
                    throw new Error('服务器异常');
                }
            }).catch(err => {
                Toast.fail(err.message || "服务器异常")
                reject(err);
            });
    })
}

export const getTimeStr = (time, isFromNow) => {
    if (isFromNow) {
        return MillisecondToDate(time);
    } else {
        return fmtDate(new Date(time), 'yyyy-MM-dd hh:mm');
    }
}
