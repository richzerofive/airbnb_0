package global;

import java.util.Comparator;

import bank.AccountMemberBean;

public class AccountNoAscSort implements Comparator<AccountMemberBean>{

	@Override
	public int compare(AccountMemberBean first, AccountMemberBean second) {
		return first.getName().compareTo(second.getName());
	}
	
}
