package util;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

/**
 * used to integrates with ExtJS 4.x data stores.<br>
 * In ExtJS, the data store use following format to verify the result:
 * <p/>
 * <pre>
 *  "{"success":false,"data":"","message":"VERBOSE ERROR"}"
 * </pre>
 *
 * @author MiXian.
 */
public class ExtJSResponse extends HashMap<String, Object> {
    /**
     *
     */
    private static final long serialVersionUID = -2791356338016228077L;

    public static ExtJSResponse successRes() {
        return new ExtJSResponse(true);
    }
    
    /**
     * When there is only a key and a value, we can return as this
     * @param key
     * @param value
     * @return {key=value success=true}
     */
    public static ExtJSResponse successResWithKeyValue(String key, Object value){
    	ExtJSResponse res = new ExtJSResponse(true);
        res.put(key, value);
        return res;
    }

    /**
     * return  {data=object, success=true}, rooted in key <b>data</b>
     * When the parameters are in a map, it will return {data={key1=value1,key2=value2,key3=value}, success=true}
     * @param data
     * @return {data=object, success=true}
     */
    public static ExtJSResponse successResWithData(Object data) {
        ExtJSResponse res = new ExtJSResponse(true);
        res.setData(data);
        return res;
    }
    
    /**
     * When just want keys and values in map, and return the data without a inner-nested root
     * @param resMap
     * @return {key1=value1,key2=value2,key3=value, success=true}
     */
    public static ExtJSResponse successResWithMap(Map<String, Object> resMap){
    	ExtJSResponse res = new ExtJSResponse(true);
    	if(resMap != null) {
    		Set<String> keys = resMap.keySet();
    		if(keys != null) {
    			for(String key : keys) {
    				res.put(key, resMap.get(key));
    			}
    		}
    	}
        return res;
    }

    public static ExtJSResponse errorResWithMsg(String error) {
        ExtJSResponse res = new ExtJSResponse(false);
        res.setErrorMsg(error);
        return res;
    }
    
    public static ExtJSResponse errorRes() {
        ExtJSResponse res = new ExtJSResponse(false);
        return res;
    }
    
    public static ExtJSResponse errorResWithDate(Object data) {
        ExtJSResponse res = new ExtJSResponse(true);
        res.setData(data);
        res.setSuccess(false);
        return res;
    }

    public ExtJSResponse() {
    }

    public ExtJSResponse(boolean success) {
        super();
        setSuccess(success);
    }

    public boolean isSuccess() {
        return (Boolean) get("success");
    }

    public void setSuccess(boolean success) {
        put("success", success);
    }

    public void setErrorMsg(String errorMsg) {
        put("error", errorMsg);
    }

    public String getErrorMsg() {
        return (String) get("error");
    }

    public void setData(Object data) {
        put("data", data);
    }

    public Object getData() {
        return get("data");
    }

}