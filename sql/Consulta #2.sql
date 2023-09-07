UPDATE 
     videos t1, 
     topics t2
SET 
     t1.playlist_id = t2.playlist_id 
WHERE
     t1.topic_id = t2.id;