package community;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import global.DispatcherServlet;
import global.Separator;

@WebServlet("/community.do")
public class CommunityController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Separator.init(request, response);
		switch (Separator.command.getAction()) {
		case "regist":			
			break;
		case "update":
			break;
		case "delete":
			break;

		}
		DispatcherServlet.send(request, response, Separator.command);
	}

}
