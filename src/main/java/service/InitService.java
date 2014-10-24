package service;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.stereotype.Service;

import util.ExtJSResponse;

/**
 * Initial the service of the application 
 * @author lmx
 *
 */
@Service
@Path("init")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class InitService {
	
	@Path("service")
	@GET
	public ExtJSResponse initService() {
		String env = System.getenv("REMOTE_ESPER_IP_PORT");
		if(env != null && !"".equals(env)) {
			return ExtJSResponse.errorRes();
		}
		return ExtJSResponse.successResWithData(env);
	}

}
