<html ng-app>
<head>
<script type="text/javascript">
    function StudentsController($scope){
        $scope.name="John Doe";
        $scope.students=['tony','mike','keith','ben'];
        $scope.addStudent=function(){
            $scope.students.push($scope.newStudent);
        };
    }
</script>
</head>
</html>