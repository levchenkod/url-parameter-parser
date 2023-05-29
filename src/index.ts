const templateParameterRegExp = new RegExp('^\:[a-z_]*$', 'gi');

const isParameter = (slug:string) => {
    return templateParameterRegExp.test(slug);
}


/**
 * @function parseURLParams
 * @description Parse parameters(like /:param_name) in URL template string
 * @example
 * const url = 'https://test.com:8080/user/:user_id/comment/:comment_id';
 * const result = parseURLParams(url);
 * console.log(result); //['user_id', 'comment_id']
*/
const parseURLParams = (template:string = ''):string[] => {
    const __fallbackSite = 'https://test.com';
    const isNotValidURLBeginning = !template?.[0] || template?.[0] === '/';
    const url =  isNotValidURLBeginning ? 
                [__fallbackSite, template]?.join('/') :
                template;
    const urlInstance = new URL(url);
    const directories = urlInstance?.pathname?.split('/');
    const parameters = directories?.filter(isParameter);
    const cleanParameters = parameters?.map((parameter:string) => (parameter?.replace(':','')));
    const uniqueParameters = [...new Set(cleanParameters)];

    return uniqueParameters;
}


export default parseURLParams;

