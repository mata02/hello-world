echo $this->Html->docType();
echo $this->Html->charset();

echo $this->Form->create(null, [
	'url' => [
		'controller' => 'Logout',
		'action' => 'index'
	],
	'id' => 'form1',
]);
echo $this->Form->end();

$(function(){
	var poolData = {
		UserPoolId: '...', // Your user pool id here
		ClientId: '...', // Your client id here
	};
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
	var userData = {
		Username: '...',
		Pool: userPool,
	};
	var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
	cognitoUser.signOut();

	$('#form1').submit();
});
