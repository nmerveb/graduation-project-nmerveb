import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getPendingList } from '../../services/fireStore';
import Application from './Application';
import styles from './ApplicationList.module.css';

function ApplicationList() {
  const history = useHistory();
  const { setIsAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true);
  const [applicationList, setApplicationList] = useState([]);
  const handleLogout = () => {
    setIsAuthenticated(false);
    history.push('/');
  };
  useEffect(() => {
    getPendingList().then((application) => {
      if (application) {
        setApplicationList(application);
        setLoading(false);
      }
    });
  }, []);
  return (
    <>
      <div className={styles.ApplicationListContainer}>
        <div className={styles.ApplicationListTitleContainer}>
          <span className={styles.ApplicationListTitle}>Başvurular</span>
          <button className={styles.LogoutBtn} type="button" onClick={handleLogout}>
            Çıkış
          </button>
        </div>
        <div className={styles.ApplicatonList}>
          {loading ? (
            <div className={styles.Loading}>Loading...</div>
          ) : (
            <>
              {applicationList.map((data) => (
                <Application
                  key={data.Id}
                  divKey={data.Id}
                  name={data.name}
                  surname={data.surname}
                  date={data.date}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ApplicationList;
