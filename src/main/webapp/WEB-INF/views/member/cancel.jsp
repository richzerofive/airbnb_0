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
<title>Account</title>
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
				<div class="panel">
					<div class="panel-header">Cancel Account</div>
					<div class="panel-body">
						<button id="cancel-account-button" class="btn btn-primary">
							Cancel my account</button>
						<div id="cancel-account-form" class="hide">
							<div class="row">
								<div class="col-7">
									<h5>Tell us why you're leaving</h5>

									<form accept-charset="UTF-8"
										action="https://www.airbnb.com/users/delete/27430889"
										method="post">
										<div style="margin: 0; padding: 0; display: inline">
											<input name="utf8" type="hidden" value="✓"><input
												name="authenticity_token" type="hidden"
												value="V4$.airbnb.com$9wwyQAJLmoI$ucQR1DlWEWTg-FuOJGHof5_ja_wE0FV8V9ooMKgRAhY=">
										</div>
										<div class="space-2">
											<label for="reason_safety_concerns"> <input
												id="reason_safety_concerns" name="reason" type="radio"
												value="safety_concerns"> I have safety concerns.
											</label> <label for="reason_privacy_concerns"> <input
												id="reason_privacy_concerns" name="reason" type="radio"
												value="privacy_concerns"> I have privacy concerns.
											</label> <label for="reason_not_useful"> <input
												id="reason_not_useful" name="reason" type="radio"
												value="not_useful"> I don't find it useful.
											</label> <label for="reason_dont_understand_how_to_use"> <input
												id="reason_dont_understand_how_to_use" name="reason"
												type="radio" value="dont_understand_how_to_use"> I
												don't understand how to use it.
											</label> <label for="reason_temporary"> <input
												id="reason_temporary" name="reason" type="radio"
												value="temporary"> It's temporary; I'll be back.
											</label> <label for="reason_other"> <input id="reason_other"
												name="reason" type="radio" value="other"> Other
											</label>
										</div>

										<div class="space-2">
											<label for="details"> Care to tell us more? </label>
											<textarea class="input-block" id="details" name="details"></textarea>
										</div>

										<div class="space-2">
											<label> Can we contact you for more details? </label> <label
												class="label-inline" for="reason_yes"> <input
												id="contact_ok_yes" name="contact_ok" type="radio"
												value="yes"> Yes
											</label> <label class="label-inline" for="reason_no"> <input
												id="contact_ok_no" name="contact_ok" type="radio" value="no">
												No
											</label>
										</div>

										<h5>What's going to happen</h5>
										<ul class="space-4">
											<li>Your profile and any listings will disappear.</li>
											<li>We'll miss you terribly.</li>
										</ul>

										<button type="submit" class="btn btn-primary">Cancel
											my account</button>
										<button class="btn" type="button"
											id="cancel-cancellation-button">Don't cancel account
										</button>
									</form>
								</div>

								<div class="col-5">
									<h5>Alternatives to canceling</h5>

									<h6>
										<a href="https://www.airbnb.com/users/privacy/27430889">Adjust
											my privacy settings</a>
									</h6>
									<p>Turn off search indexing on your listing, preventing
										search engines such as Google and Bing from displaying your
										listing in their search results.</p>
									<h6>
										<a href="https://www.airbnb.com/users/notifications/27430889">Change
											notification preferences</a>
									</h6>
									<p>Are we sending you too much email? Change your
										notification preferences.</p>
								</div>
							</div>
						</div>
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