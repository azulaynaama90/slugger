

exports.slugger = (...args) => {
    let res = args.join(' ').split(' ').join('-');
    console.log(res);
    return res;
}

