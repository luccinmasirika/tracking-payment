/**
 * FORM SCREEN
 */
exports.form = (req, res) => {
  res.render('pages/form');
};

/**
 * LOGIN SCREEN
 */
exports.login = (req, res) => {
  res.render('pages/login');
};

/**
 * DASHBOARD SCREEN
 */
exports.admin = (req, res) => {
  const path = 'dashboard';
  res.render('pages/admin', { path });
};
