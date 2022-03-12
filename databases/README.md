# I worked with Eduardo and Mamudu and looked at student repos and YouTube videos to get this done
https://www.youtube.com/watch?v=HXV3zeQKqGY sql
https://www.youtube.com/watch?v=inN8seMm7UI colab
https://colab.research.google.com/drive/1w4sxF_wuovO56QOlYW59StJw6Wnutqxr?usp=sharing 
#Practice your homework query here.
#Please save it to your repository.
#It is necessary to complete the homework before the asynchronous work.
#I worked with Mamudu and Eduardo and looked at student repos to get this done 
sql_query_string = """

--Type your homework query below
SELECT 
s.First AS First, 
s.Last AS Last, 
s.StudentID AS StudentID, 
s.ScanTime AS ScanTime, 
s.Status AS Status, 
    p.Date AS Date, 
    p.CourseSection AS CourseSection, 
    p.Attendance AS Attendance, 
    p.Teacher AS Teacher, 
    p.Period AS Period
    FROM scan AS s
    INNER JOIN periodAtt AS p
    ON s.studentID = p.studentID
    AND substr(ScanTime,1,instr(s.scanTime, ' ')-1) = p.Date
    WHERE p.Attendance = 'A'
    ORDER BY s.Last, s.First ASC

"""
 
#Exectue the SQL query
result_df = sql_query_to_pd(sql_query_string, db_name='default.db')
result_df

#Practice your asynchronous queries here.
#Note that you will need to complete the homework assignment first.
#Please post asynch. queries on the Slack when you are done.

sql_query_string = """

SELECT Teacher, COUNT(Attendance) AS TotalCuts
    FROM (SELECT 
    s.First AS First, 
    s.Last AS Last, 
    s.StudentID AS StudentID, 
    s.ScanTime AS ScanTime, 
    s.Status AS Status, 
    p.Date AS Date, 
    p.CourseSection AS CourseSection, 
    p.Attendance AS Attendance,
    p.Teacher AS Teacher, 
    p.Period AS Period
    FROM scan AS s
    INNER JOIN periodAtt AS p
    ON s.studentID = p.studentID
    AND substr(ScanTime,1,instr(s.scanTime, ' ')-1) = p.Date
    WHERE p.Attendance = 'A'
    ORDER BY s.Last, s.First ASC) AS allCuts
    GROUP BY Teacher
    ORDER BY TotalCuts DESC
"""
 
#Exectue the SQL query
result_df = sql_query_to_pd(sql_query_string, db_name='default.db')
result_df
