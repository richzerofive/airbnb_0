<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js" />
<!doctype html>
<html lang="en">
<head>
<link
	href="https://a2.muscache.com/airbnb/static/packages/common-86180c1646b448bc4a69535df81ff5de.css"
	media="all" rel="stylesheet" type="text/css">
<title>Change Password</title>
</head>
<body>
	<div class="page-container-responsive space-top-4 space-4">
		<div class="row">

			<div class="col-md-3">

				<ul class="sidenav-list">
					<li><a
						href="https://www.airbnb.com/users/payment_methods/27430889"
						aria-selected="false" class="sidenav-item">Payment Methods</a></li>

					<li><a
						href="https://www.airbnb.com/users/transaction_history/27430889"
						aria-selected="false" class="sidenav-item">Transaction History</a>
					</li>

					<li><a href="${context}/member/change_pw"
						aria-selected="false" class="sidenav-item" id="change-pw">Change
							Password</a></li>
					<li><a href="${context}/member/cancel" aria-selected="false"
						class="sidenav-item" id="remove-account">Remove Account</a></li>

				</ul>

			</div>

			<div class="col-md-9">
				<!-- Change Your Password -->
				<form accept-charset="UTF-8"
					action="https://www.airbnb.com/change_password" method="post">
					<div style="margin: 0; padding: 0; display: inline">
						<input name="utf8" type="hidden" value="✓"><input
							name="authenticity_token" type="hidden"
							value="V4$.airbnb.com$9wwyQAJLmoI$ucQR1DlWEWTg-FuOJGHof5_ja_wE0FV8V9ooMKgRAhY=">
					</div>
					<div id="change_your_password" class="panel space-4">
						<div class="panel-header">Change Your Password</div>
						<div class="panel-body">
							<input id="id" name="id" type="hidden" value="27430889">
							<input id="redirect_on_error" name="redirect_on_error"
								type="hidden" value="/users/security/27430889"> <input
								id="user_password_ok" name="user[password_ok]" type="hidden"
								value="true">
							<div class="row">
								<div class="col-lg-7">
									<div class="row row-condensed space-2">
										<div class="col-md-5 text-right">
											<label for="old_password"> Old Password </label>
										</div>
										<div class="col-md-7">
											<input class="input-block" id="old_password"
												name="old_password" type="password"
												style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAAXNSR0IArs4c6QAAAPhJREFUOBHlU70KgzAQPlMhEvoQTg6OPoOjT+JWOnRqkUKHgqWP4OQbOPokTk6OTkVULNSLVc62oJmbIdzd95NcuGjX2/3YVI/Ts+t0WLE2ut5xsQ0O+90F6UxFjAI8qNcEGONia08e6MNONYwCS7EQAizLmtGUDEzTBNd1fxsYhjEBnHPQNG3KKTYV34F8ec/zwHEciOMYyrIE3/ehKAqIoggo9inGXKmFXwbyBkmSQJqmUNe15IRhCG3byphitm1/eUzDM4qR0TTNjEixGdAnSi3keS5vSk2UDKqqgizLqB4YzvassiKhGtZ/jDMtLOnHz7TE+yf8BaDZXA509yeBAAAAAElFTkSuQmCC&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;"
												autocomplete="off">
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-lg-7">
									<div class="row row-condensed space-2">
										<div class="col-md-5 text-right">
											<label for="user_password"> New Password </label>
										</div>
										<div class="col-7">
											<input class="input-block" data-hook="new_password"
												id="new_password" name="user[password]" size="30"
												type="password"
												style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
										</div>
									</div>

									<div class="row row-condensed space-2">
										<div class="col-md-5 text-right">
											<label for="user_password_confirmation"> Confirm
												Password </label>
										</div>
										<div class="col-md-7">
											<input class="input-block" id="user_password_confirmation"
												name="user[password_confirmation]" size="30" type="password"
												style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%; cursor: auto;">
										</div>
									</div>
								</div>
								<div class="col-lg-5 password-strength"
									data-hook="password-strength"></div>
							</div>
						</div>
						<div class="panel-footer">
							<button type="submit" class="btn btn-primary">Update
								Password</button>
						</div>
					</div>
				</form>
				<!-- Login Notifications -->
				<form accept-charset="UTF-8"
					action="https://www.airbnb.com/users/enable_login_notifications"
					method="post">
					<div style="margin: 0; padding: 0; display: inline">
						<input name="utf8" type="hidden" value="✓"><input
							name="authenticity_token" type="hidden"
							value="V4$.airbnb.com$9wwyQAJLmoI$ucQR1DlWEWTg-FuOJGHof5_ja_wE0FV8V9ooMKgRAhY=">
					</div>
					<div class="panel space-4">
						<div class="panel-header">Login Notifications</div>
						<section class="panel-body">
							<label for="enable_login_notifications"> <input
								name="user[login_notifications_enabled]" type="hidden" value="0"><input
								id="user_login_notifications_enabled"
								name="user[login_notifications_enabled]" type="checkbox"
								value="1"> Turn on login notifications
							</label> <br>
							<p>Login notifications are an extra security feature. When
								you turn them on, we’ll let you know when anyone logs into your
								Airbnb account from a new browser. This helps keep your account
								safe.</p>

						</section>
						<div class="panel-footer">
							<button type="submit" class="btn btn-primary">Save</button>
						</div>
					</div>
				</form>
				<!-- Login History -->
				<div class="panel space-4">
					<div class="panel-header">Login History</div>
					<section class="panel-body">
						<table id="login_history" class="table">
							<thead>
								<tr>
									<th>Browser/Device</th>
									<th>Location&nbsp; <i class="icon icon-question"
										data-behavior="tooltip" data-position="right"
										data-sticky="true" aria-label="Location is approximated."></i>
									</th>
									<th>Recent Activity</th>
									<th>&nbsp;</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<ul class="list-unstyled">
											<li>Chrome</li>
											<li><span class="text-muted">OS X 10.12.0</span></li>
										</ul>
									</td>
									<td>Seoul, 11, Republic of Korea</td>
									<td>26 minutes ago&nbsp; <i
										class="icon icon-question text-muted" data-behavior="tooltip"
										data-position="right" data-sticky="true"
										aria-label="Time: October 18 at 12:14am PDT<br />IP: 61.73.59.48"></i>
										<br>
									</td>
									<td class="text-right" id="3d6de8edf110d42d11c8bdb8f74fb5f1">
										<a href="/logout" class="remove" title="Log Out"> Log Out
									</a>
									</td>
								</tr>
								<tr>
									<td>
										<ul class="list-unstyled">
											<li>Chrome</li>
											<li><span class="text-muted">OS X 10.12.0</span></li>
										</ul>
									</td>
									<td>Seoul, 11, Republic of Korea</td>
									<td>7 days ago&nbsp; <i
										class="icon icon-question text-muted" data-behavior="tooltip"
										data-position="right" data-sticky="true"
										aria-label="Time: October 11 at 12:41am PDT<br />IP: 115.94.144.227"></i>
										<br>
									</td>
									<td class="text-right" id="f3de15391476b2248c6aee90f4ebd54e">
										<a href="#" class="kill-session-action"
										data-session-id="f3de15391476b2248c6aee90f4ebd54e"
										title="Log Out"> Log Out </a>
									</td>
								</tr>
								<tr>
									<td>
										<ul class="list-unstyled">
											<li>Chrome</li>
											<li><span class="text-muted">Windows 7</span></li>
										</ul>
									</td>
									<td>Seoul, 11, Republic of Korea</td>
									<td>8 days ago&nbsp; <i
										class="icon icon-question text-muted" data-behavior="tooltip"
										data-position="right" data-sticky="true"
										aria-label="Time: October 9 at  8:17pm PDT<br />IP: 115.94.144.228"></i>
										<br>
									</td>
									<td class="text-right" id="7e17a95e445c7c0c7754955747e47c28">
										<a href="#" class="kill-session-action"
										data-session-id="7e17a95e445c7c0c7754955747e47c28"
										title="Log Out"> Log Out </a>
									</td>
								</tr>
								<tr>
									<td>
										<ul class="list-unstyled">
											<li>Chrome</li>
											<li><span class="text-muted">OS X 10.12.0</span></li>
										</ul>
									</td>
									<td>Seoul, 11, Republic of Korea</td>
									<td>8 days ago&nbsp; <i
										class="icon icon-question text-muted" data-behavior="tooltip"
										data-position="right" data-sticky="true"
										aria-label="Time: October 9 at  5:44pm PDT<br />IP: 115.94.144.227"></i>
										<br>
									</td>
									<td class="text-right" id="17751758612e841a313c671a249830d3">
										<a href="#" class="kill-session-action"
										data-session-id="17751758612e841a313c671a249830d3"
										title="Log Out"> Log Out </a>
									</td>
								</tr>
								<tr>
									<td>
										<ul class="list-unstyled">
											<li>Chrome</li>
											<li><span class="text-muted">OS X 10.12.0</span></li>
										</ul>
									</td>
									<td>Seoul, 11, Republic of Korea</td>
									<td>11 days ago&nbsp; <i
										class="icon icon-question text-muted" data-behavior="tooltip"
										data-position="right" data-sticky="true"
										aria-label="Time: October 6 at  8:23pm PDT<br />IP: 115.94.144.227"></i>
										<br>
									</td>
									<td class="text-right" id="c6cfb961ad0fa617b2d28dc66f3ba6f4">
										<a href="#" class="kill-session-action"
										data-session-id="c6cfb961ad0fa617b2d28dc66f3ba6f4"
										title="Log Out"> Log Out </a>
									</td>
								</tr>
							</tbody>
						</table>
					</section>
					<div class="panel-footer">
						If you see something unfamiliar, <a href="#"
							class="change-password-link">change your password</a>.
					</div>
				</div>

			</div>




			<div class="panel-footer">
				<input class="btn btn-primary" id="user_submit" name="commit"
					type="submit" value="Save">
			</div>

		</div>

	</div>
	</div>
</body>
</html>