<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

JSONObject jsonObj = new JSONObject();
JSONObject jsonObj2 = null;
JSONArray jsonArray = new JSONArray();
 
//1번째 데이터
jsonObj2 = new JSONObject();
jsonObj2.put("seq", "1");
jsonObj2.put("title", "제목");
jsonObj2.put("create_date", "2014-11-11");
jsonObj2.put("create_name", "개발로짜");
jsonObj2.put("hitnum", "1");
jsonArray.add(jsonObj2);
 
//2번째 데이터
jsonObj2 = new JSONObject();
jsonObj2.put("seq", "2");
jsonObj2.put("title", "제목222");
jsonObj2.put("create_date", "2014-11-11");
jsonObj2.put("create_name", "개발로짜2323");
jsonObj2.put("hitnum", "10");
jsonArray.add(jsonObj2);
 
PrintWriter pw = response.getWriter();
pw.print(jsonArray);
pw.flush();
pw.close();